import React from "react";
import PlaceItem from "./PlaceItem";
import Card from "../../shared/components/UIElements/Card";
import "./PlaceList.css";

const PlaceList = (props) => {
  if (props.item.length === 0) {
    return (
      <div className="place-list center">
        <Card>
          <h2>No places found</h2>
          <button>Share Places</button>
        </Card>
      </div>
    );
  }
  return (
    <ul>
      {props.item.map((place) => {
        <PlaceItem
          key={place.id}
          id={place.id}
          image={place.imageUrl}
          title={place.title}
          description={place.description}
          address={place.address}
          creatorId={place.creator}
          coodinate={place.location}
        />;
      })}
    </ul>
  );
};

export default PlaceList;
