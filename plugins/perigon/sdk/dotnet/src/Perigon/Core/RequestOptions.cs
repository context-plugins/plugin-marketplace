using System.Collections.Generic;
using Microsoft.Extensions.Logging;
using Perigon.Core.Hooks;
using Perigon.Core.Models;

namespace Perigon.Core;

public sealed record RequestOptions
{
    public LogLevel? LogLevel { get; init; }

    public IReadOnlyList<HeaderParam>? Headers { get; init; }

    public IReadOnlyList<SdkHook>? Hooks { get; init; }
}
