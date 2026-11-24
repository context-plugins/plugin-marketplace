using System.Collections.Generic;
using Microsoft.Extensions.Logging;
using GoogleCloudBuild.Core.Hooks;
using GoogleCloudBuild.Core.Models;

namespace GoogleCloudBuild.Core;

public sealed record RequestOptions
{
    public LogLevel? LogLevel { get; init; }

    public IReadOnlyList<HeaderParam>? Headers { get; init; }

    public IReadOnlyList<SdkHook>? Hooks { get; init; }
}
