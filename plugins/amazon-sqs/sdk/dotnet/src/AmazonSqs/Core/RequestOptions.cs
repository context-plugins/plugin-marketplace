using System.Collections.Generic;
using Microsoft.Extensions.Logging;
using AmazonSqs.Core.Hooks;
using AmazonSqs.Core.Models;

namespace AmazonSqs.Core;

public sealed record RequestOptions
{
    public LogLevel? LogLevel { get; init; }

    public IReadOnlyList<HeaderParam>? Headers { get; init; }

    public IReadOnlyList<SdkHook>? Hooks { get; init; }
}
