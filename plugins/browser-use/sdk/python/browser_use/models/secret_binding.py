from __future__ import annotations

from pydantic import ConfigDict, Field
from typing_extensions import TypedDict

from ..core import SdkBaseModel
from .unions.source import Source, SourceDict


class SecretBinding(SdkBaseModel):
    """One credential this run may have typed into a browser field.

    The value never reaches the agent. It is encrypted at rest, kept out of the worker payload, and typed straight into
    the focused field by the server when the agent asks for the alias by name — and only while the page it is typing
    into is on one of ``allowedDomains``.

    Run-scoped: bindings die with the run, so a follow-up run that needs the same credential must send it again."""

    model_config = ConfigDict(extra="forbid")

    alias: str
    """Name the agent refers to this secret by, e.g. "github_password"."""

    source: Source
    allowed_domains: list[str] = Field(alias="allowedDomains")
    """Hosts the secret may be typed into, e.g. ["github.com"]. A host covers its subdomains. Bare hostnames only — no
    scheme, port, path, or wildcard."""


class SecretBindingDict(TypedDict):
    alias: str
    source: SourceDict
    allowed_domains: list[str]
