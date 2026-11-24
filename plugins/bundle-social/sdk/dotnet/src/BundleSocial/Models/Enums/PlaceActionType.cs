using System;
using System.Text.Json.Serialization;
using BundleSocial.Core.Enum;

namespace BundleSocial.Models.Enums;

[JsonConverter(typeof(StringEnumConverter<PlaceActionType>))]
public sealed record PlaceActionType : OpenStringEnum<PlaceActionType>
{
    private PlaceActionType(string value) : base(value)
    {
    }

    public static readonly PlaceActionType Appointment = new("APPOINTMENT");

    public static readonly PlaceActionType OnlineAppointment = new("ONLINE_APPOINTMENT");

    public static readonly PlaceActionType DiningReservation = new("DINING_RESERVATION");

    public static readonly PlaceActionType FoodOrdering = new("FOOD_ORDERING");

    public static readonly PlaceActionType FoodDelivery = new("FOOD_DELIVERY");

    public static readonly PlaceActionType FoodTakeout = new("FOOD_TAKEOUT");

    public static readonly PlaceActionType ShopOnline = new("SHOP_ONLINE");

    public TResult Match<TResult>(Func<TResult> onAppointment,
        Func<TResult> onOnlineAppointment,
        Func<TResult> onDiningReservation,
        Func<TResult> onFoodOrdering,
        Func<TResult> onFoodDelivery,
        Func<TResult> onFoodTakeout,
        Func<TResult> onShopOnline,
        Func<string, TResult> otherwise) =>
        this switch
        {
            _ when this == Appointment => onAppointment(),
            _ when this == OnlineAppointment => onOnlineAppointment(),
            _ when this == DiningReservation => onDiningReservation(),
            _ when this == FoodOrdering => onFoodOrdering(),
            _ when this == FoodDelivery => onFoodDelivery(),
            _ when this == FoodTakeout => onFoodTakeout(),
            _ when this == ShopOnline => onShopOnline(),
            _ => otherwise(Value)
        };

    public void Match(Action onAppointment,
        Action onOnlineAppointment,
        Action onDiningReservation,
        Action onFoodOrdering,
        Action onFoodDelivery,
        Action onFoodTakeout,
        Action onShopOnline,
        Action<string> otherwise)
    {
        if (this == Appointment) onAppointment();
        else if (this == OnlineAppointment) onOnlineAppointment();
        else if (this == DiningReservation) onDiningReservation();
        else if (this == FoodOrdering) onFoodOrdering();
        else if (this == FoodDelivery) onFoodDelivery();
        else if (this == FoodTakeout) onFoodTakeout();
        else if (this == ShopOnline) onShopOnline();
        else otherwise(Value);
    }
}
