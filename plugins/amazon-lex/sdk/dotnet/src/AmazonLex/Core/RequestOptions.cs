using System.Collections.Generic;
using Microsoft.Extensions.Logging;
using AmazonLex.Core.Hooks;
using AmazonLex.Core.Models;

namespace AmazonLex.Core;

public sealed record RequestOptions
{
    public LogLevel? LogLevel { get; init; }

    public IReadOnlyList<HeaderParam>? Headers { get; init; }

    public IReadOnlyList<SdkHook>? Hooks { get; init; }
}
