using System;
using System.Text.Json.Serialization;
using AmazonRekognition.Core.Enum;

namespace AmazonRekognition.Models.Enums;

[JsonConverter(typeof(StringEnumConverter<XAmzTarget2AmazonRekognitionProjectApi>))]
public sealed record XAmzTarget2AmazonRekognitionProjectApi : OpenStringEnum<XAmzTarget2AmazonRekognitionProjectApi>
{
    private XAmzTarget2AmazonRekognitionProjectApi(string value) : base(value)
    {
    }

    public static readonly XAmzTarget2AmazonRekognitionProjectApi RekognitionServiceDescribeProjects = new(
        "RekognitionService.DescribeProjects");

    public TResult Match<TResult>(Func<TResult> onRekognitionServiceDescribeProjects,
        Func<string, TResult> otherwise) =>
        this switch
        {
            _ when this == RekognitionServiceDescribeProjects => onRekognitionServiceDescribeProjects(),
            _ => otherwise(Value)
        };

    public void Match(Action onRekognitionServiceDescribeProjects, Action<string> otherwise)
    {
        if (this == RekognitionServiceDescribeProjects) onRekognitionServiceDescribeProjects();
        else otherwise(Value);
    }
}
