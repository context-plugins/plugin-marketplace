from __future__ import annotations

from typing import TypeAlias

EmailAddressList: TypeAlias = str | list[str]
"""One address or a list. Each may be ``Name <address>`` or a bare address."""

EmailAddressListDict: TypeAlias = str | list[str]
