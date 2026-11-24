using System;
using System.Text.Json.Serialization;
using Celestia.Core.Enum;

namespace Celestia.Models.Enums;

[JsonConverter(typeof(StringEnumConverter<Method>))]
public sealed record Method : OpenStringEnum<Method>
{
    private Method(string value) : base(value)
    {
    }

    public static readonly Method BlobSubmit = new("blob.Submit");

    public static readonly Method BlobGet = new("blob.Get");

    public static readonly Method BlobGetAll = new("blob.GetAll");

    public static readonly Method BlobGetProof = new("blob.GetProof");

    public static readonly Method BlobIncluded = new("blob.Included");

    public static readonly Method BlobSubscribe = new("blob.Subscribe");

    public TResult Match<TResult>(Func<TResult> onBlobSubmit,
        Func<TResult> onBlobGet,
        Func<TResult> onBlobGetAll,
        Func<TResult> onBlobGetProof,
        Func<TResult> onBlobIncluded,
        Func<TResult> onBlobSubscribe,
        Func<string, TResult> otherwise) =>
        this switch
        {
            _ when this == BlobSubmit => onBlobSubmit(),
            _ when this == BlobGet => onBlobGet(),
            _ when this == BlobGetAll => onBlobGetAll(),
            _ when this == BlobGetProof => onBlobGetProof(),
            _ when this == BlobIncluded => onBlobIncluded(),
            _ when this == BlobSubscribe => onBlobSubscribe(),
            _ => otherwise(Value)
        };

    public void Match(Action onBlobSubmit,
        Action onBlobGet,
        Action onBlobGetAll,
        Action onBlobGetProof,
        Action onBlobIncluded,
        Action onBlobSubscribe,
        Action<string> otherwise)
    {
        if (this == BlobSubmit) onBlobSubmit();
        else if (this == BlobGet) onBlobGet();
        else if (this == BlobGetAll) onBlobGetAll();
        else if (this == BlobGetProof) onBlobGetProof();
        else if (this == BlobIncluded) onBlobIncluded();
        else if (this == BlobSubscribe) onBlobSubscribe();
        else otherwise(Value);
    }
}
