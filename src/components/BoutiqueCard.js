export default function BoutiqueCard(props) {
  const displayBoutiques = (props) => {
    const { boutiqueData } = props;

    if (boutiqueData) {
      return boutiqueData.boutiques.map((boutique, index) => {
        return (
          <div className="boutique-card mb-2 mt-2 mx-5" key={boutique._id}>
            <h4>{boutique.name}</h4>
            <p className="text-start">{boutique.description}</p>
          </div>
        );
      });
    } else {
      return <p>No identified boutique yet</p>;
    }
  };

  return <>{displayBoutiques(props)}</>;
}
