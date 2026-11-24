using System.Collections.Generic;
using Microsoft.Extensions.Logging;
using Fellow.Core.Hooks;
using Fellow.Core.Models;

namespace Fellow.Core;

public sealed record RequestOptions
{
    public LogLevel? LogLevel { get; init; }

    public IReadOnlyList<HeaderParam>? Headers { get; init; }

    public IReadOnlyList<SdkHook>? Hooks { get; init; }
}
