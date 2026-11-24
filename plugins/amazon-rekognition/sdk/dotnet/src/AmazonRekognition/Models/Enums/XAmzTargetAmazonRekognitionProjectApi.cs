using System;
using System.Text.Json.Serialization;
using AmazonRekognition.Core.Enum;

namespace AmazonRekognition.Models.Enums;

[JsonConverter(typeof(StringEnumConverter<XAmzTargetAmazonRekognitionProjectApi>))]
public sealed record XAmzTargetAmazonRekognitionProjectApi : OpenStringEnum<XAmzTargetAmazonRekognitionProjectApi>
{
    private XAmzTargetAmazonRekognitionProjectApi(string value) : base(value)
    {
    }

    public static readonly XAmzTargetAmazonRekognitionProjectApi RekognitionServiceCreateProject = new(
        "RekognitionService.CreateProject");

    public TResult Match<TResult>(Func<TResult> onRekognitionServiceCreateProject, Func<string, TResult> otherwise) =>
        this switch
        {
            _ when this == RekognitionServiceCreateProject => onRekognitionServiceCreateProject(),
            _ => otherwise(Value)
        };

    public void Match(Action onRekognitionServiceCreateProject, Action<string> otherwise)
    {
        if (this == RekognitionServiceCreateProject) onRekognitionServiceCreateProject();
        else otherwise(Value);
    }
}
