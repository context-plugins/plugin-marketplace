using System;
using System.Text.Json.Serialization;
using MicrosoftDynamicsNav.Core.Enum;

namespace MicrosoftDynamicsNav.Models.Enums;

[JsonConverter(typeof(StringEnumConverter<LineTypeDynamics365BusinessCentralApiV20SalesOrdersApi>))]
public sealed record LineTypeDynamics365BusinessCentralApiV20SalesOrdersApi : OpenStringEnum<LineTypeDynamics365BusinessCentralApiV20SalesOrdersApi>
{
    private LineTypeDynamics365BusinessCentralApiV20SalesOrdersApi(string value) : base(value)
    {
    }

    public static readonly LineTypeDynamics365BusinessCentralApiV20SalesOrdersApi Comment = new("Comment");

    public static readonly LineTypeDynamics365BusinessCentralApiV20SalesOrdersApi Account = new("Account");

    public static readonly LineTypeDynamics365BusinessCentralApiV20SalesOrdersApi Item = new("Item");

    public static readonly LineTypeDynamics365BusinessCentralApiV20SalesOrdersApi Resource = new("Resource");

    public static readonly LineTypeDynamics365BusinessCentralApiV20SalesOrdersApi FixedAsset = new("Fixed Asset");

    public static readonly LineTypeDynamics365BusinessCentralApiV20SalesOrdersApi Charge = new("Charge");

    public TResult Match<TResult>(Func<TResult> onComment,
        Func<TResult> onAccount,
        Func<TResult> onItem,
        Func<TResult> onResource,
        Func<TResult> onFixedAsset,
        Func<TResult> onCharge,
        Func<string, TResult> otherwise) =>
        this switch
        {
            _ when this == Comment => onComment(),
            _ when this == Account => onAccount(),
            _ when this == Item => onItem(),
            _ when this == Resource => onResource(),
            _ when this == FixedAsset => onFixedAsset(),
            _ when this == Charge => onCharge(),
            _ => otherwise(Value)
        };

    public void Match(Action onComment,
        Action onAccount,
        Action onItem,
        Action onResource,
        Action onFixedAsset,
        Action onCharge,
        Action<string> otherwise)
    {
        if (this == Comment) onComment();
        else if (this == Account) onAccount();
        else if (this == Item) onItem();
        else if (this == Resource) onResource();
        else if (this == FixedAsset) onFixedAsset();
        else if (this == Charge) onCharge();
        else otherwise(Value);
    }
}
