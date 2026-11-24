using System;
using System.Text.Json.Serialization;
using Divvy.Core.Enum;

namespace Divvy.Models.Enums;

/// <summary>
/// Item type response.
/// </summary>
[JsonConverter(typeof(StringEnumConverter<ItemTypeResponse>))]
public sealed record ItemTypeResponse : OpenStringEnum<ItemTypeResponse>
{
    private ItemTypeResponse(string value) : base(value)
    {
    }

    public static readonly ItemTypeResponse Undefined = new("UNDEFINED");

    public static readonly ItemTypeResponse Unknown = new("UNKNOWN");

    public static readonly ItemTypeResponse Service = new("SERVICE");

    public static readonly ItemTypeResponse Inventory = new("INVENTORY");

    public static readonly ItemTypeResponse NonInventory = new("NON_INVENTORY");

    public static readonly ItemTypeResponse Payment = new("PAYMENT");

    public static readonly ItemTypeResponse Discount = new("DISCOUNT");

    public static readonly ItemTypeResponse SalesTax = new("SALES_TAX");

    public static readonly ItemTypeResponse Subtotal = new("SUBTOTAL");

    public static readonly ItemTypeResponse OtherCharge = new("OTHER_CHARGE");

    public static readonly ItemTypeResponse InventoryAssembly = new("INVENTORY_ASSEMBLY");

    public static readonly ItemTypeResponse Group = new("GROUP");

    public static readonly ItemTypeResponse SalesTaxGroup = new("SALES_TAX_GROUP");

    public static readonly ItemTypeResponse FixedAsset = new("FIXED_ASSET");

    public static readonly ItemTypeResponse Category = new("CATEGORY");

    public static readonly ItemTypeResponse Expense = new("EXPENSE");

    public TResult Match<TResult>(Func<TResult> onUndefined,
        Func<TResult> onUnknown,
        Func<TResult> onService,
        Func<TResult> onInventory,
        Func<TResult> onNonInventory,
        Func<TResult> onPayment,
        Func<TResult> onDiscount,
        Func<TResult> onSalesTax,
        Func<TResult> onSubtotal,
        Func<TResult> onOtherCharge,
        Func<TResult> onInventoryAssembly,
        Func<TResult> onGroup,
        Func<TResult> onSalesTaxGroup,
        Func<TResult> onFixedAsset,
        Func<TResult> onCategory,
        Func<TResult> onExpense,
        Func<string, TResult> otherwise) =>
        this switch
        {
            _ when this == Undefined => onUndefined(),
            _ when this == Unknown => onUnknown(),
            _ when this == Service => onService(),
            _ when this == Inventory => onInventory(),
            _ when this == NonInventory => onNonInventory(),
            _ when this == Payment => onPayment(),
            _ when this == Discount => onDiscount(),
            _ when this == SalesTax => onSalesTax(),
            _ when this == Subtotal => onSubtotal(),
            _ when this == OtherCharge => onOtherCharge(),
            _ when this == InventoryAssembly => onInventoryAssembly(),
            _ when this == Group => onGroup(),
            _ when this == SalesTaxGroup => onSalesTaxGroup(),
            _ when this == FixedAsset => onFixedAsset(),
            _ when this == Category => onCategory(),
            _ when this == Expense => onExpense(),
            _ => otherwise(Value)
        };

    public void Match(Action onUndefined,
        Action onUnknown,
        Action onService,
        Action onInventory,
        Action onNonInventory,
        Action onPayment,
        Action onDiscount,
        Action onSalesTax,
        Action onSubtotal,
        Action onOtherCharge,
        Action onInventoryAssembly,
        Action onGroup,
        Action onSalesTaxGroup,
        Action onFixedAsset,
        Action onCategory,
        Action onExpense,
        Action<string> otherwise)
    {
        if (this == Undefined) onUndefined();
        else if (this == Unknown) onUnknown();
        else if (this == Service) onService();
        else if (this == Inventory) onInventory();
        else if (this == NonInventory) onNonInventory();
        else if (this == Payment) onPayment();
        else if (this == Discount) onDiscount();
        else if (this == SalesTax) onSalesTax();
        else if (this == Subtotal) onSubtotal();
        else if (this == OtherCharge) onOtherCharge();
        else if (this == InventoryAssembly) onInventoryAssembly();
        else if (this == Group) onGroup();
        else if (this == SalesTaxGroup) onSalesTaxGroup();
        else if (this == FixedAsset) onFixedAsset();
        else if (this == Category) onCategory();
        else if (this == Expense) onExpense();
        else otherwise(Value);
    }
}
