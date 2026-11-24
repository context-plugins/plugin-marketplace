using System;
using System.Text.Json.Serialization;
using MicrosoftDynamicsNav.Core.Enum;

namespace MicrosoftDynamicsNav.Models.Enums;

[JsonConverter(typeof(StringEnumConverter<TypeDynamics365BusinessCentralApiV20ItemsApi>))]
public sealed record TypeDynamics365BusinessCentralApiV20ItemsApi : OpenStringEnum<TypeDynamics365BusinessCentralApiV20ItemsApi>
{
    private TypeDynamics365BusinessCentralApiV20ItemsApi(string value) : base(value)
    {
    }

    public static readonly TypeDynamics365BusinessCentralApiV20ItemsApi Inventory = new("Inventory");

    public static readonly TypeDynamics365BusinessCentralApiV20ItemsApi Service = new("Service");

    public static readonly TypeDynamics365BusinessCentralApiV20ItemsApi NonInventory = new("Non-Inventory");

    public TResult Match<TResult>(Func<TResult> onInventory,
        Func<TResult> onService,
        Func<TResult> onNonInventory,
        Func<string, TResult> otherwise) =>
        this switch
        {
            _ when this == Inventory => onInventory(),
            _ when this == Service => onService(),
            _ when this == NonInventory => onNonInventory(),
            _ => otherwise(Value)
        };

    public void Match(Action onInventory, Action onService, Action onNonInventory, Action<string> otherwise)
    {
        if (this == Inventory) onInventory();
        else if (this == Service) onService();
        else if (this == NonInventory) onNonInventory();
        else otherwise(Value);
    }
}
