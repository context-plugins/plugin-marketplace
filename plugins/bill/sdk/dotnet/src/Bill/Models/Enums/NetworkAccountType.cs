using System;
using System.Text.Json.Serialization;
using Bill.Core.Enum;

namespace Bill.Models.Enums;

/// <summary>
/// Enum for different types of accounts in BILL network.
/// </summary>
[JsonConverter(typeof(StringEnumConverter<NetworkAccountType>))]
public sealed record NetworkAccountType : OpenStringEnum<NetworkAccountType>
{
    private NetworkAccountType(string value) : base(value)
    {
    }

    public static readonly NetworkAccountType Advanced = new("ADVANCED");

    public static readonly NetworkAccountType Business = new("BUSINESS");

    public static readonly NetworkAccountType Rpps = new("RPPS");

    public static readonly NetworkAccountType Contractor = new("CONTRACTOR");

    public static readonly NetworkAccountType EmployeeOrIndividual = new("EMPLOYEE_OR_INDIVIDUAL");

    public static readonly NetworkAccountType Undefined = new("UNDEFINED");

    public TResult Match<TResult>(Func<TResult> onAdvanced,
        Func<TResult> onBusiness,
        Func<TResult> onRpps,
        Func<TResult> onContractor,
        Func<TResult> onEmployeeOrIndividual,
        Func<TResult> onUndefined,
        Func<string, TResult> otherwise) =>
        this switch
        {
            _ when this == Advanced => onAdvanced(),
            _ when this == Business => onBusiness(),
            _ when this == Rpps => onRpps(),
            _ when this == Contractor => onContractor(),
            _ when this == EmployeeOrIndividual => onEmployeeOrIndividual(),
            _ when this == Undefined => onUndefined(),
            _ => otherwise(Value)
        };

    public void Match(Action onAdvanced,
        Action onBusiness,
        Action onRpps,
        Action onContractor,
        Action onEmployeeOrIndividual,
        Action onUndefined,
        Action<string> otherwise)
    {
        if (this == Advanced) onAdvanced();
        else if (this == Business) onBusiness();
        else if (this == Rpps) onRpps();
        else if (this == Contractor) onContractor();
        else if (this == EmployeeOrIndividual) onEmployeeOrIndividual();
        else if (this == Undefined) onUndefined();
        else otherwise(Value);
    }
}
