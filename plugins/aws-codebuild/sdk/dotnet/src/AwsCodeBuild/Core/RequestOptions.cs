using System.Collections.Generic;
using Microsoft.Extensions.Logging;
using AwsCodeBuild.Core.Hooks;
using AwsCodeBuild.Core.Models;

namespace AwsCodeBuild.Core;

public sealed record RequestOptions
{
    public LogLevel? LogLevel { get; init; }

    public IReadOnlyList<HeaderParam>? Headers { get; init; }

    public IReadOnlyList<SdkHook>? Hooks { get; init; }
}
