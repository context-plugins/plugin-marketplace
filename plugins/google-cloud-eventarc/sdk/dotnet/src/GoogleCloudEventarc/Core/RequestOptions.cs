using System.Collections.Generic;
using Microsoft.Extensions.Logging;
using GoogleCloudEventarc.Core.Hooks;
using GoogleCloudEventarc.Core.Models;

namespace GoogleCloudEventarc.Core;

public sealed record RequestOptions
{
    public LogLevel? LogLevel { get; init; }

    public IReadOnlyList<HeaderParam>? Headers { get; init; }

    public IReadOnlyList<SdkHook>? Hooks { get; init; }
}
