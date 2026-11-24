using System.Collections.Generic;
using Microsoft.Extensions.Logging;
using GoogleCloudDatastream.Core.Hooks;
using GoogleCloudDatastream.Core.Models;

namespace GoogleCloudDatastream.Core;

public sealed record RequestOptions
{
    public LogLevel? LogLevel { get; init; }

    public IReadOnlyList<HeaderParam>? Headers { get; init; }

    public IReadOnlyList<SdkHook>? Hooks { get; init; }
}
