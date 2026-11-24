using System.Collections.Generic;
using Microsoft.Extensions.Logging;
using GoogleCloudTalentSolution.Core.Hooks;
using GoogleCloudTalentSolution.Core.Models;

namespace GoogleCloudTalentSolution.Core;

public sealed record RequestOptions
{
    public LogLevel? LogLevel { get; init; }

    public IReadOnlyList<HeaderParam>? Headers { get; init; }

    public IReadOnlyList<SdkHook>? Hooks { get; init; }
}
