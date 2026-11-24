using System.Collections.Generic;
using Microsoft.Extensions.Logging;
using Shortcut.Core.Hooks;
using Shortcut.Core.Models;

namespace Shortcut.Core;

public sealed record RequestOptions
{
    public LogLevel? LogLevel { get; init; }

    public IReadOnlyList<HeaderParam>? Headers { get; init; }

    public IReadOnlyList<SdkHook>? Hooks { get; init; }
}
