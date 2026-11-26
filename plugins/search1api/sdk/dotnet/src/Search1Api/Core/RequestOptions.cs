using System.Collections.Generic;
using Microsoft.Extensions.Logging;
using Search1Api.Core.Hooks;
using Search1Api.Core.Models;

namespace Search1Api.Core;

public sealed record RequestOptions
{
    public LogLevel? LogLevel { get; init; }

    public IReadOnlyList<HeaderParam>? Headers { get; init; }

    public IReadOnlyList<SdkHook>? Hooks { get; init; }
}
