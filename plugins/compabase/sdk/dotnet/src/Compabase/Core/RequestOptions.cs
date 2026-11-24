using System.Collections.Generic;
using Microsoft.Extensions.Logging;
using Compabase.Core.Hooks;
using Compabase.Core.Models;

namespace Compabase.Core;

public sealed record RequestOptions
{
    public LogLevel? LogLevel { get; init; }

    public IReadOnlyList<HeaderParam>? Headers { get; init; }

    public IReadOnlyList<SdkHook>? Hooks { get; init; }
}
