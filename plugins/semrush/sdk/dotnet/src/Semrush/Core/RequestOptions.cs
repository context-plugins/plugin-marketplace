using System.Collections.Generic;
using Microsoft.Extensions.Logging;
using Semrush.Core.Hooks;
using Semrush.Core.Models;

namespace Semrush.Core;

public sealed record RequestOptions
{
    public LogLevel? LogLevel { get; init; }

    public IReadOnlyList<HeaderParam>? Headers { get; init; }

    public IReadOnlyList<SdkHook>? Hooks { get; init; }
}
