using System.Collections.Generic;
using Microsoft.Extensions.Logging;
using CallNode.Core.Hooks;
using CallNode.Core.Models;

namespace CallNode.Core;

public sealed record RequestOptions
{
    public LogLevel? LogLevel { get; init; }

    public IReadOnlyList<HeaderParam>? Headers { get; init; }

    public IReadOnlyList<SdkHook>? Hooks { get; init; }
}
