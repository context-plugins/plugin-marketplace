using System.Collections.Generic;
using Microsoft.Extensions.Logging;
using Hightouch.Core.Hooks;
using Hightouch.Core.Models;

namespace Hightouch.Core;

public sealed record RequestOptions
{
    public LogLevel? LogLevel { get; init; }

    public IReadOnlyList<HeaderParam>? Headers { get; init; }

    public IReadOnlyList<SdkHook>? Hooks { get; init; }
}
