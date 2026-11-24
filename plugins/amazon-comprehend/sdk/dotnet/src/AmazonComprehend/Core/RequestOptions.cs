using System.Collections.Generic;
using Microsoft.Extensions.Logging;
using AmazonComprehend.Core.Hooks;
using AmazonComprehend.Core.Models;

namespace AmazonComprehend.Core;

public sealed record RequestOptions
{
    public LogLevel? LogLevel { get; init; }

    public IReadOnlyList<HeaderParam>? Headers { get; init; }

    public IReadOnlyList<SdkHook>? Hooks { get; init; }
}
