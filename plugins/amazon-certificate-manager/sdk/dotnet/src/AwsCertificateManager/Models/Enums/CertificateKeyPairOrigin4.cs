using System;
using System.Text.Json.Serialization;
using AwsCertificateManager.Core.Enum;

namespace AwsCertificateManager.Models.Enums;

[JsonConverter(typeof(StringEnumConverter<CertificateKeyPairOrigin4>))]
public sealed record CertificateKeyPairOrigin4 : OpenStringEnum<CertificateKeyPairOrigin4>
{
    private CertificateKeyPairOrigin4(string value) : base(value)
    {
    }

    public static readonly CertificateKeyPairOrigin4 AwsManaged = new("AWS_MANAGED");

    public static readonly CertificateKeyPairOrigin4 Acme = new("ACME");

    public static readonly CertificateKeyPairOrigin4 CustomerProvided = new("CUSTOMER_PROVIDED");

    public TResult Match<TResult>(Func<TResult> onAwsManaged,
        Func<TResult> onAcme,
        Func<TResult> onCustomerProvided,
        Func<string, TResult> otherwise) =>
        this switch
        {
            _ when this == AwsManaged => onAwsManaged(),
            _ when this == Acme => onAcme(),
            _ when this == CustomerProvided => onCustomerProvided(),
            _ => otherwise(Value)
        };

    public void Match(Action onAwsManaged, Action onAcme, Action onCustomerProvided, Action<string> otherwise)
    {
        if (this == AwsManaged) onAwsManaged();
        else if (this == Acme) onAcme();
        else if (this == CustomerProvided) onCustomerProvided();
        else otherwise(Value);
    }
}
