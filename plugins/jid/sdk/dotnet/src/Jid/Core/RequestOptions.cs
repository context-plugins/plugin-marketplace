using System.Collections.Generic;
using Microsoft.Extensions.Logging;
using Jid.Core.Hooks;
using Jid.Core.Models;

namespace Jid.Core;

public sealed record RequestOptions
{
    public LogLevel? LogLevel { get; init; }

    public IReadOnlyList<HeaderParam>? Headers { get; init; }

    public IReadOnlyList<SdkHook>? Hooks { get; init; }
}
