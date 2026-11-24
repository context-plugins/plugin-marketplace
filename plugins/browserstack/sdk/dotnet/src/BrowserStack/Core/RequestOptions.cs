using System.Collections.Generic;
using Microsoft.Extensions.Logging;
using BrowserStack.Core.Hooks;
using BrowserStack.Core.Models;

namespace BrowserStack.Core;

public sealed record RequestOptions
{
    public LogLevel? LogLevel { get; init; }

    public IReadOnlyList<HeaderParam>? Headers { get; init; }

    public IReadOnlyList<SdkHook>? Hooks { get; init; }
}
