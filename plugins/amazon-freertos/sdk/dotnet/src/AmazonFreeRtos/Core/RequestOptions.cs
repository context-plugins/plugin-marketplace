using System.Collections.Generic;
using Microsoft.Extensions.Logging;
using AmazonFreeRtos.Core.Hooks;
using AmazonFreeRtos.Core.Models;

namespace AmazonFreeRtos.Core;

public sealed record RequestOptions
{
    public LogLevel? LogLevel { get; init; }

    public IReadOnlyList<HeaderParam>? Headers { get; init; }

    public IReadOnlyList<SdkHook>? Hooks { get; init; }
}
