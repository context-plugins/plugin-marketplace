using System.Collections.Generic;
using Microsoft.Extensions.Logging;
using Mailboxlayer.Core.Hooks;
using Mailboxlayer.Core.Models;

namespace Mailboxlayer.Core;

public sealed record RequestOptions
{
    public LogLevel? LogLevel { get; init; }

    public IReadOnlyList<HeaderParam>? Headers { get; init; }

    public IReadOnlyList<SdkHook>? Hooks { get; init; }
}
