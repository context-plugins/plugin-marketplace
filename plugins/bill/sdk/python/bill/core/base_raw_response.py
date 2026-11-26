"""What the generated per-group raw-response classes share: a raw client, a server, its auth."""

from __future__ import annotations

from typing import Generic, TypeVar

from .raw_client import RawClientT

ServerT = TypeVar("ServerT")
"""The generated ``Server`` type a subclass carries.

Unbounded and never touched by the runtime: its only purpose is to let this class hold the server
without *naming* it, since the runtime is copied verbatim into every generated SDK. A plain
attribute typed ``Any`` would lose what subclasses need -- that ``self._server.prism(...)``
type-checks."""

AuthT = TypeVar("AuthT")
"""The generated scheme holder a *secured* subclass carries.

Unbounded for the same reason as ``ServerT``, so ``self._auth.basic_auth`` type-checks in a
generated endpoint while the runtime stays free of any upward import. It is also what keeps the two
flavors' schemes apart, so a scheme that can only work on one transport cannot be handed to the
other."""


class BaseRawResponse(Generic[RawClientT, ServerT]):
    """Base for the internal per-group raw-response classes.

    Holds the raw client and the server, both type parameters a subclass fixes, so
    ``self._client.execute(...)`` resolves to the right flavor and ``self._server`` to the concrete
    generated ``Server``. A group whose operations declare no ``security`` extends **this**, and so
    has no ``self._auth`` to name; one that does extends :class:`SecuredRawResponse`."""

    def __init__(self, client: RawClientT, server: ServerT) -> None:
        self._client = client
        self._server = server


class SecuredRawResponse(BaseRawResponse[RawClientT, ServerT], Generic[RawClientT, ServerT, AuthT]):
    """Base for a group at least one of whose operations declares ``security``.

    Adds the API's security schemes as a third parameter a subclass fixes. Two classes rather than
    one optional argument, because the split makes the reach of a credential checkable: a group that
    declares no ``security`` cannot name ``self._auth``, so a generator writing ``auth=self._auth.``
    into the wrong file fails to type-check instead of shipping a credential."""

    def __init__(self, client: RawClientT, server: ServerT, auth: AuthT) -> None:
        super().__init__(client, server)
        self._auth = auth
