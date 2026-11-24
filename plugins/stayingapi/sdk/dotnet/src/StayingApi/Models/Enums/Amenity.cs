using System;
using System.Text.Json.Serialization;
using StayingApi.Core.Enum;

namespace StayingApi.Models.Enums;

[JsonConverter(typeof(StringEnumConverter<Amenity>))]
public sealed record Amenity : OpenStringEnum<Amenity>
{
    private Amenity(string value) : base(value)
    {
    }

    public static readonly Amenity Pool = new("pool");

    public static readonly Amenity HotTub = new("hot_tub");

    public static readonly Amenity Kitchen = new("kitchen");

    public static readonly Amenity Wifi = new("wifi");

    public static readonly Amenity AirConditioning = new("air_conditioning");

    public static readonly Amenity Heating = new("heating");

    public static readonly Amenity ParkingFree = new("parking_free");

    public static readonly Amenity ParkingPaid = new("parking_paid");

    public static readonly Amenity PetFriendly = new("pet_friendly");

    public static readonly Amenity Washer = new("washer");

    public static readonly Amenity Dryer = new("dryer");

    public static readonly Amenity EvCharger = new("ev_charger");

    public static readonly Amenity Gym = new("gym");

    public static readonly Amenity SeaView = new("sea_view");

    public static readonly Amenity Beachfront = new("beachfront");

    public static readonly Amenity Balcony = new("balcony");

    public static readonly Amenity Bbq = new("bbq");

    public static readonly Amenity Workspace = new("workspace");

    public static readonly Amenity Crib = new("crib");

    public static readonly Amenity Elevator = new("elevator");

    public static readonly Amenity WheelchairAccessible = new("wheelchair_accessible");

    public static readonly Amenity SmokeAlarm = new("smoke_alarm");

    public static readonly Amenity Breakfast = new("breakfast");

    public static readonly Amenity Spa = new("spa");

    public static readonly Amenity Garden = new("garden");

    public static readonly Amenity Fireplace = new("fireplace");

    public static readonly Amenity Dishwasher = new("dishwasher");

    public static readonly Amenity SelfCheckIn = new("self_check_in");

    public static readonly Amenity NonSmoking = new("non_smoking");

    public static readonly Amenity FamilyFriendly = new("family_friendly");

    public TResult Match<TResult>(Func<TResult> onPool,
        Func<TResult> onHotTub,
        Func<TResult> onKitchen,
        Func<TResult> onWifi,
        Func<TResult> onAirConditioning,
        Func<TResult> onHeating,
        Func<TResult> onParkingFree,
        Func<TResult> onParkingPaid,
        Func<TResult> onPetFriendly,
        Func<TResult> onWasher,
        Func<TResult> onDryer,
        Func<TResult> onEvCharger,
        Func<TResult> onGym,
        Func<TResult> onSeaView,
        Func<TResult> onBeachfront,
        Func<TResult> onBalcony,
        Func<TResult> onBbq,
        Func<TResult> onWorkspace,
        Func<TResult> onCrib,
        Func<TResult> onElevator,
        Func<TResult> onWheelchairAccessible,
        Func<TResult> onSmokeAlarm,
        Func<TResult> onBreakfast,
        Func<TResult> onSpa,
        Func<TResult> onGarden,
        Func<TResult> onFireplace,
        Func<TResult> onDishwasher,
        Func<TResult> onSelfCheckIn,
        Func<TResult> onNonSmoking,
        Func<TResult> onFamilyFriendly,
        Func<string, TResult> otherwise) =>
        this switch
        {
            _ when this == Pool => onPool(),
            _ when this == HotTub => onHotTub(),
            _ when this == Kitchen => onKitchen(),
            _ when this == Wifi => onWifi(),
            _ when this == AirConditioning => onAirConditioning(),
            _ when this == Heating => onHeating(),
            _ when this == ParkingFree => onParkingFree(),
            _ when this == ParkingPaid => onParkingPaid(),
            _ when this == PetFriendly => onPetFriendly(),
            _ when this == Washer => onWasher(),
            _ when this == Dryer => onDryer(),
            _ when this == EvCharger => onEvCharger(),
            _ when this == Gym => onGym(),
            _ when this == SeaView => onSeaView(),
            _ when this == Beachfront => onBeachfront(),
            _ when this == Balcony => onBalcony(),
            _ when this == Bbq => onBbq(),
            _ when this == Workspace => onWorkspace(),
            _ when this == Crib => onCrib(),
            _ when this == Elevator => onElevator(),
            _ when this == WheelchairAccessible => onWheelchairAccessible(),
            _ when this == SmokeAlarm => onSmokeAlarm(),
            _ when this == Breakfast => onBreakfast(),
            _ when this == Spa => onSpa(),
            _ when this == Garden => onGarden(),
            _ when this == Fireplace => onFireplace(),
            _ when this == Dishwasher => onDishwasher(),
            _ when this == SelfCheckIn => onSelfCheckIn(),
            _ when this == NonSmoking => onNonSmoking(),
            _ when this == FamilyFriendly => onFamilyFriendly(),
            _ => otherwise(Value)
        };

    public void Match(Action onPool,
        Action onHotTub,
        Action onKitchen,
        Action onWifi,
        Action onAirConditioning,
        Action onHeating,
        Action onParkingFree,
        Action onParkingPaid,
        Action onPetFriendly,
        Action onWasher,
        Action onDryer,
        Action onEvCharger,
        Action onGym,
        Action onSeaView,
        Action onBeachfront,
        Action onBalcony,
        Action onBbq,
        Action onWorkspace,
        Action onCrib,
        Action onElevator,
        Action onWheelchairAccessible,
        Action onSmokeAlarm,
        Action onBreakfast,
        Action onSpa,
        Action onGarden,
        Action onFireplace,
        Action onDishwasher,
        Action onSelfCheckIn,
        Action onNonSmoking,
        Action onFamilyFriendly,
        Action<string> otherwise)
    {
        if (this == Pool) onPool();
        else if (this == HotTub) onHotTub();
        else if (this == Kitchen) onKitchen();
        else if (this == Wifi) onWifi();
        else if (this == AirConditioning) onAirConditioning();
        else if (this == Heating) onHeating();
        else if (this == ParkingFree) onParkingFree();
        else if (this == ParkingPaid) onParkingPaid();
        else if (this == PetFriendly) onPetFriendly();
        else if (this == Washer) onWasher();
        else if (this == Dryer) onDryer();
        else if (this == EvCharger) onEvCharger();
        else if (this == Gym) onGym();
        else if (this == SeaView) onSeaView();
        else if (this == Beachfront) onBeachfront();
        else if (this == Balcony) onBalcony();
        else if (this == Bbq) onBbq();
        else if (this == Workspace) onWorkspace();
        else if (this == Crib) onCrib();
        else if (this == Elevator) onElevator();
        else if (this == WheelchairAccessible) onWheelchairAccessible();
        else if (this == SmokeAlarm) onSmokeAlarm();
        else if (this == Breakfast) onBreakfast();
        else if (this == Spa) onSpa();
        else if (this == Garden) onGarden();
        else if (this == Fireplace) onFireplace();
        else if (this == Dishwasher) onDishwasher();
        else if (this == SelfCheckIn) onSelfCheckIn();
        else if (this == NonSmoking) onNonSmoking();
        else if (this == FamilyFriendly) onFamilyFriendly();
        else otherwise(Value);
    }
}
