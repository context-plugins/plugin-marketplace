using System.Collections.Generic;
using Microsoft.Extensions.Logging;
using CloudKit.Core.Hooks;
using CloudKit.Core.Models;

namespace CloudKit.Core;

public sealed record RequestOptions
{
    public LogLevel? LogLevel { get; init; }

    public IReadOnlyList<HeaderParam>? Headers { get; init; }

    public IReadOnlyList<SdkHook>? Hooks { get; init; }
}
