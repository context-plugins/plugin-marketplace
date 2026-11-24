using System;
using System.Text.Json.Serialization;
using Soda.Core.Enum;

namespace Soda.Models.Enums;

[JsonConverter(typeof(StringEnumConverter<PublicApiPostProcessingStageTypeDto>))]
public sealed record PublicApiPostProcessingStageTypeDto : OpenStringEnum<PublicApiPostProcessingStageTypeDto>
{
    private PublicApiPostProcessingStageTypeDto(string value) : base(value)
    {
    }

    public static readonly PublicApiPostProcessingStageTypeDto DiagnosticWarehouse = new("diagnosticWarehouse");

    public TResult Match<TResult>(Func<TResult> onDiagnosticWarehouse, Func<string, TResult> otherwise) =>
        this switch
        {
            _ when this == DiagnosticWarehouse => onDiagnosticWarehouse(),
            _ => otherwise(Value)
        };

    public void Match(Action onDiagnosticWarehouse, Action<string> otherwise)
    {
        if (this == DiagnosticWarehouse) onDiagnosticWarehouse();
        else otherwise(Value);
    }
}
