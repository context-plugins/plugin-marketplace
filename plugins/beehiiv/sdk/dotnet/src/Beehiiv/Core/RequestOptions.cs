using System.Collections.Generic;
using Microsoft.Extensions.Logging;
using Beehiiv.Core.Hooks;
using Beehiiv.Core.Models;

namespace Beehiiv.Core;

public sealed record RequestOptions
{
    public LogLevel? LogLevel { get; init; }

    public IReadOnlyList<HeaderParam>? Headers { get; init; }

    public IReadOnlyList<SdkHook>? Hooks { get; init; }
}
