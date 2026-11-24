using System.Collections.Generic;
using Microsoft.Extensions.Logging;
using StayingApi.Core.Hooks;
using StayingApi.Core.Models;

namespace StayingApi.Core;

public sealed record RequestOptions
{
    public LogLevel? LogLevel { get; init; }

    public IReadOnlyList<HeaderParam>? Headers { get; init; }

    public IReadOnlyList<SdkHook>? Hooks { get; init; }
}
