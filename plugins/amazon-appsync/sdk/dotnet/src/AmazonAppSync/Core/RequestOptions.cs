using System.Collections.Generic;
using Microsoft.Extensions.Logging;
using AmazonAppSync.Core.Hooks;
using AmazonAppSync.Core.Models;

namespace AmazonAppSync.Core;

public sealed record RequestOptions
{
    public LogLevel? LogLevel { get; init; }

    public IReadOnlyList<HeaderParam>? Headers { get; init; }

    public IReadOnlyList<SdkHook>? Hooks { get; init; }
}
