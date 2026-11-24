using System.Collections.Generic;
using Microsoft.Extensions.Logging;
using BrowserUse.Core.Hooks;
using BrowserUse.Core.Models;

namespace BrowserUse.Core;

public sealed record RequestOptions
{
    public LogLevel? LogLevel { get; init; }

    public IReadOnlyList<HeaderParam>? Headers { get; init; }

    public IReadOnlyList<SdkHook>? Hooks { get; init; }
}
