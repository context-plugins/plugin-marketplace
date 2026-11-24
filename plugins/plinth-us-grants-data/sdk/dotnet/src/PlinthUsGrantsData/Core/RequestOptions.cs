using System.Collections.Generic;
using Microsoft.Extensions.Logging;
using PlinthUsGrantsData.Core.Hooks;
using PlinthUsGrantsData.Core.Models;

namespace PlinthUsGrantsData.Core;

public sealed record RequestOptions
{
    public LogLevel? LogLevel { get; init; }

    public IReadOnlyList<HeaderParam>? Headers { get; init; }

    public IReadOnlyList<SdkHook>? Hooks { get; init; }
}
