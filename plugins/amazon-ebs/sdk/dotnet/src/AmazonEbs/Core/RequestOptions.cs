using System.Collections.Generic;
using Microsoft.Extensions.Logging;
using AmazonEbs.Core.Hooks;
using AmazonEbs.Core.Models;

namespace AmazonEbs.Core;

public sealed record RequestOptions
{
    public LogLevel? LogLevel { get; init; }

    public IReadOnlyList<HeaderParam>? Headers { get; init; }

    public IReadOnlyList<SdkHook>? Hooks { get; init; }
}
