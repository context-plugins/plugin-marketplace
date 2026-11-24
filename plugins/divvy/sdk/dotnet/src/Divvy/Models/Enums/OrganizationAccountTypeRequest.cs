using System;
using System.Text.Json.Serialization;
using Divvy.Core.Enum;

namespace Divvy.Models.Enums;

/// <summary>
/// Organization Account Type.
/// </summary>
[JsonConverter(typeof(StringEnumConverter<OrganizationAccountTypeRequest>))]
public sealed record OrganizationAccountTypeRequest : OpenStringEnum<OrganizationAccountTypeRequest>
{
    private OrganizationAccountTypeRequest(string value) : base(value)
    {
    }

    public static readonly OrganizationAccountTypeRequest Business = new("BUSINESS");

    public static readonly OrganizationAccountTypeRequest Contractor = new("CONTRACTOR");

    public static readonly OrganizationAccountTypeRequest EmployeeOrIndividual = new("EMPLOYEE_OR_INDIVIDUAL");

    public static readonly OrganizationAccountTypeRequest Other = new("OTHER");

    public static readonly OrganizationAccountTypeRequest Consumer = new("CONSUMER");

    public TResult Match<TResult>(Func<TResult> onBusiness,
        Func<TResult> onContractor,
        Func<TResult> onEmployeeOrIndividual,
        Func<TResult> onOther,
        Func<TResult> onConsumer,
        Func<string, TResult> otherwise) =>
        this switch
        {
            _ when this == Business => onBusiness(),
            _ when this == Contractor => onContractor(),
            _ when this == EmployeeOrIndividual => onEmployeeOrIndividual(),
            _ when this == Other => onOther(),
            _ when this == Consumer => onConsumer(),
            _ => otherwise(Value)
        };

    public void Match(Action onBusiness,
        Action onContractor,
        Action onEmployeeOrIndividual,
        Action onOther,
        Action onConsumer,
        Action<string> otherwise)
    {
        if (this == Business) onBusiness();
        else if (this == Contractor) onContractor();
        else if (this == EmployeeOrIndividual) onEmployeeOrIndividual();
        else if (this == Other) onOther();
        else if (this == Consumer) onConsumer();
        else otherwise(Value);
    }
}
