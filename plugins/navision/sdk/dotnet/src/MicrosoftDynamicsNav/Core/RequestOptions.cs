using System.Collections.Generic;
using Microsoft.Extensions.Logging;
using MicrosoftDynamicsNav.Core.Hooks;
using MicrosoftDynamicsNav.Core.Models;

namespace MicrosoftDynamicsNav.Core;

public sealed record RequestOptions
{
    public LogLevel? LogLevel { get; init; }

    public IReadOnlyList<HeaderParam>? Headers { get; init; }

    public IReadOnlyList<SdkHook>? Hooks { get; init; }
}
