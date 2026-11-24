using System;
using System.Text.Json.Serialization;
using AmazonRekognition.Core.Enum;

namespace AmazonRekognition.Models.Enums;

[JsonConverter(typeof(StringEnumConverter<XAmzTarget1AmazonRekognitionProjectApi>))]
public sealed record XAmzTarget1AmazonRekognitionProjectApi : OpenStringEnum<XAmzTarget1AmazonRekognitionProjectApi>
{
    private XAmzTarget1AmazonRekognitionProjectApi(string value) : base(value)
    {
    }

    public static readonly XAmzTarget1AmazonRekognitionProjectApi RekognitionServiceDeleteProject = new(
        "RekognitionService.DeleteProject");

    public TResult Match<TResult>(Func<TResult> onRekognitionServiceDeleteProject, Func<string, TResult> otherwise) =>
        this switch
        {
            _ when this == RekognitionServiceDeleteProject => onRekognitionServiceDeleteProject(),
            _ => otherwise(Value)
        };

    public void Match(Action onRekognitionServiceDeleteProject, Action<string> otherwise)
    {
        if (this == RekognitionServiceDeleteProject) onRekognitionServiceDeleteProject();
        else otherwise(Value);
    }
}
