using System;
using System.Text.Json.Serialization;
using Bill.Core.Enum;

namespace Bill.Models.Enums;

/// <summary>
/// Organization Account Type.
/// </summary>
[JsonConverter(typeof(StringEnumConverter<OrganizationAccountTypeResponse>))]
public sealed record OrganizationAccountTypeResponse : OpenStringEnum<OrganizationAccountTypeResponse>
{
    private OrganizationAccountTypeResponse(string value) : base(value)
    {
    }

    public static readonly OrganizationAccountTypeResponse Business = new("BUSINESS");

    public static readonly OrganizationAccountTypeResponse Contractor = new("CONTRACTOR");

    public static readonly OrganizationAccountTypeResponse EmployeeOrIndividual = new("EMPLOYEE_OR_INDIVIDUAL");

    public static readonly OrganizationAccountTypeResponse Other = new("OTHER");

    public static readonly OrganizationAccountTypeResponse Consumer = new("CONSUMER");

    public static readonly OrganizationAccountTypeResponse Undefined = new("UNDEFINED");

    public TResult Match<TResult>(Func<TResult> onBusiness,
        Func<TResult> onContractor,
        Func<TResult> onEmployeeOrIndividual,
        Func<TResult> onOther,
        Func<TResult> onConsumer,
        Func<TResult> onUndefined,
        Func<string, TResult> otherwise) =>
        this switch
        {
            _ when this == Business => onBusiness(),
            _ when this == Contractor => onContractor(),
            _ when this == EmployeeOrIndividual => onEmployeeOrIndividual(),
            _ when this == Other => onOther(),
            _ when this == Consumer => onConsumer(),
            _ when this == Undefined => onUndefined(),
            _ => otherwise(Value)
        };

    public void Match(Action onBusiness,
        Action onContractor,
        Action onEmployeeOrIndividual,
        Action onOther,
        Action onConsumer,
        Action onUndefined,
        Action<string> otherwise)
    {
        if (this == Business) onBusiness();
        else if (this == Contractor) onContractor();
        else if (this == EmployeeOrIndividual) onEmployeeOrIndividual();
        else if (this == Other) onOther();
        else if (this == Consumer) onConsumer();
        else if (this == Undefined) onUndefined();
        else otherwise(Value);
    }
}
