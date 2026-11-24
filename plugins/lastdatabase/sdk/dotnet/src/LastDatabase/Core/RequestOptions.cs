using System.Collections.Generic;
using Microsoft.Extensions.Logging;
using LastDatabase.Core.Hooks;
using LastDatabase.Core.Models;

namespace LastDatabase.Core;

public sealed record RequestOptions
{
    public LogLevel? LogLevel { get; init; }

    public IReadOnlyList<HeaderParam>? Headers { get; init; }

    public IReadOnlyList<SdkHook>? Hooks { get; init; }
}
