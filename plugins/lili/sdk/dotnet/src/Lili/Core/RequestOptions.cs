using System.Collections.Generic;
using Microsoft.Extensions.Logging;
using Lili.Core.Hooks;
using Lili.Core.Models;

namespace Lili.Core;

public sealed record RequestOptions
{
    public LogLevel? LogLevel { get; init; }

    public IReadOnlyList<HeaderParam>? Headers { get; init; }

    public IReadOnlyList<SdkHook>? Hooks { get; init; }
}
