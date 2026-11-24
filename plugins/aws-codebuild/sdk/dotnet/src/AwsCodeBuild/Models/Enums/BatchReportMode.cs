using System;
using System.Text.Json.Serialization;
using AwsCodeBuild.Core.Enum;

namespace AwsCodeBuild.Models.Enums;

/// <summary>
/// Specifies how build status reports are sent to the source provider for the batch build. This property is only used when the source provider for your project is Bitbucket, GitHub, or GitHub Enterprise, and your project is configured to report build statuses to the source provider. REPORT_AGGREGATED_BATCH (Default) Aggregate all of the build statuses into a single status report. REPORT_INDIVIDUAL_BUILDS Send a separate status report for each individual build.
/// </summary>
[JsonConverter(typeof(StringEnumConverter<BatchReportMode>))]
public sealed record BatchReportMode : OpenStringEnum<BatchReportMode>
{
    private BatchReportMode(string value) : base(value)
    {
    }

    public static readonly BatchReportMode ReportIndividualBuilds = new("REPORT_INDIVIDUAL_BUILDS");

    public static readonly BatchReportMode ReportAggregatedBatch = new("REPORT_AGGREGATED_BATCH");

    public TResult Match<TResult>(Func<TResult> onReportIndividualBuilds,
        Func<TResult> onReportAggregatedBatch,
        Func<string, TResult> otherwise) =>
        this switch
        {
            _ when this == ReportIndividualBuilds => onReportIndividualBuilds(),
            _ when this == ReportAggregatedBatch => onReportAggregatedBatch(),
            _ => otherwise(Value)
        };

    public void Match(Action onReportIndividualBuilds, Action onReportAggregatedBatch, Action<string> otherwise)
    {
        if (this == ReportIndividualBuilds) onReportIndividualBuilds();
        else if (this == ReportAggregatedBatch) onReportAggregatedBatch();
        else otherwise(Value);
    }
}
