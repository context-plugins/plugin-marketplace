using System;
using System.Collections.Generic;

namespace AgentReady.Core.Webhooks.Signing;

internal abstract record SignatureHeaderFormat
{
    internal abstract IReadOnlyList<string> ExtractSignatures(string headerValue);

    internal sealed record Raw : SignatureHeaderFormat
    {
        internal override IReadOnlyList<string> ExtractSignatures(string headerValue) => [headerValue];
    }

    internal sealed record KeyValue(string Key) : SignatureHeaderFormat
    {
        internal override IReadOnlyList<string> ExtractSignatures(string headerValue)
        {
            List<string> signatures = [];
            foreach (var pair in headerValue.Split(','))
            {
                var separatorIndex = pair.IndexOf('=');
                if (separatorIndex < 0)
                    continue;
                if (!string.Equals(pair[..separatorIndex].Trim(), Key, StringComparison.Ordinal))
                    continue;
                signatures.Add(pair[(separatorIndex + 1)..].Trim());
            }
            return signatures;
        }
    }
}
