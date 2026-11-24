using System.Collections.Generic;
using Microsoft.Extensions.Logging;
using Coresignal.Core.Hooks;
using Coresignal.Core.Models;

namespace Coresignal.Core;

public sealed record RequestOptions
{
    public LogLevel? LogLevel { get; init; }

    public IReadOnlyList<HeaderParam>? Headers { get; init; }

    public IReadOnlyList<SdkHook>? Hooks { get; init; }
}
