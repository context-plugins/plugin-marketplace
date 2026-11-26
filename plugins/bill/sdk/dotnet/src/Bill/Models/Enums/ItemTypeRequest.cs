using System;
using System.Text.Json.Serialization;
using Bill.Core.Enum;

namespace Bill.Models.Enums;

/// <summary>
/// ItemType.
/// </summary>
[JsonConverter(typeof(StringEnumConverter<ItemTypeRequest>))]
public sealed record ItemTypeRequest : OpenStringEnum<ItemTypeRequest>
{
    private ItemTypeRequest(string value) : base(value)
    {
    }

    public static readonly ItemTypeRequest Unknown = new("UNKNOWN");

    public static readonly ItemTypeRequest Service = new("SERVICE");

    public static readonly ItemTypeRequest Inventory = new("INVENTORY");

    public static readonly ItemTypeRequest NonInventory = new("NON_INVENTORY");

    public static readonly ItemTypeRequest Payment = new("PAYMENT");

    public static readonly ItemTypeRequest Discount = new("DISCOUNT");

    public static readonly ItemTypeRequest SalesTax = new("SALES_TAX");

    public static readonly ItemTypeRequest Subtotal = new("SUBTOTAL");

    public static readonly ItemTypeRequest OtherCharge = new("OTHER_CHARGE");

    public static readonly ItemTypeRequest InventoryAssembly = new("INVENTORY_ASSEMBLY");

    public static readonly ItemTypeRequest Group = new("GROUP");

    public static readonly ItemTypeRequest SalesTaxGroup = new("SALES_TAX_GROUP");

    public static readonly ItemTypeRequest FixedAsset = new("FIXED_ASSET");

    public static readonly ItemTypeRequest Category = new("CATEGORY");

    public static readonly ItemTypeRequest Expense = new("EXPENSE");

    public TResult Match<TResult>(Func<TResult> onUnknown,
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

    public void Match(Action onUnknown,
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
        if (this == Unknown) onUnknown();
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
