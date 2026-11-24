using System.Collections.Generic;
using Microsoft.Extensions.Logging;
using GoogleCloudDataproc.Core.Hooks;
using GoogleCloudDataproc.Core.Models;

namespace GoogleCloudDataproc.Core;

public sealed record RequestOptions
{
    public LogLevel? LogLevel { get; init; }

    public IReadOnlyList<HeaderParam>? Headers { get; init; }

    public IReadOnlyList<SdkHook>? Hooks { get; init; }
}
