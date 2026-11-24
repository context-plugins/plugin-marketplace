using GoogleSearchConsole.Models;

namespace GoogleSearchConsole.Requests.UrlTestingTools;

/// <summary>
/// The inputs of the SearchconsoleUrlTestingToolsMobileFriendlyTestRun operation.
/// </summary>
public sealed record SearchconsoleUrlTestingToolsMobileFriendlyTestRunRequest
{
    public required RunMobileFriendlyTestRequest Body { get; init; }
}
