from __future__ import annotations

from typing import TypeAlias

from ..link_codeqr_io_links_api import LinkCodeqrIoLinksApi, LinkCodeqrIoLinksApiDict
from ..link_error import LinkError, LinkErrorDict

LinksBulkResponse1: TypeAlias = LinkCodeqrIoLinksApi | LinkError

LinksBulkResponse1Dict: TypeAlias = LinkCodeqrIoLinksApiDict | LinkErrorDict
