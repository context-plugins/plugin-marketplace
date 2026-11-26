export function operatingSystem(): string | undefined {
  const nodeProcess = runtimeGlobals.process;
  const versions = nodeProcess?.versions;
  if (
    present(versions?.node) !== undefined ||
    present(versions?.bun) !== undefined ||
    present(versions?.deno) !== undefined
  ) {
    return processPlatform(nodeProcess);
  }
  return present(runtimeGlobals.navigator?.userAgentData?.platform);
}

export function runtimeDescription(): string | undefined {
  const versions = runtimeGlobals.process?.versions;
  const bun = present(versions?.bun);
  if (bun !== undefined) return `Bun/${bun}`;
  const deno = present(versions?.deno);
  if (deno !== undefined) return `Deno/${deno}`;
  const edge = present(runtimeGlobals.EdgeRuntime);
  if (edge !== undefined) return edge;

  const userAgent = present(runtimeGlobals.navigator?.userAgent);
  if (userAgent === CLOUDFLARE_WORKERS_USER_AGENT) return userAgent;

  const node = present(versions?.node);
  return node === undefined ? userAgent : `Node.js/${node}`;
}

export function environmentVariable(name: string): string | undefined {
  try {
    return present(runtimeGlobals.process?.env?.[name]?.trim());
  } catch {
    return undefined;
  }
}

type RuntimeVersions = {
  readonly node?: string;
  readonly bun?: string;
  readonly deno?: string;
};

type NodeProcess = {
  readonly versions?: RuntimeVersions;
  readonly platform?: string;
  readonly arch?: string;
  readonly env?: Readonly<Record<string, string | undefined>>;
};

type NavigatorLike = {
  readonly userAgent?: string;
  readonly userAgentData?: { readonly platform?: string };
};

type RuntimeGlobals = {
  readonly process?: NodeProcess;
  readonly navigator?: NavigatorLike;
  readonly EdgeRuntime?: string;
};

const runtimeGlobals: RuntimeGlobals = globalThis;

const CLOUDFLARE_WORKERS_USER_AGENT = "Cloudflare-Workers";

const present = (value: string | undefined): string | undefined =>
  value === undefined || value === "" ? undefined : value;

function processPlatform(nodeProcess: NodeProcess | undefined): string | undefined {
  const platform = present(nodeProcess?.platform);
  if (platform === undefined) return undefined;
  const arch = present(nodeProcess?.arch);
  return arch === undefined ? platform : `${platform} ${arch}`;
}
